$bytes = [System.IO.File]::ReadAllBytes('C:\Users\Thorn\.openclaw\workspace\temp_initial.html')
# Detect encoding - check BOM
if ($bytes[0] -eq 0xFF -and $bytes[1] -eq 0xFE) {
    Write-Host "UTF-16 LE detected"
    $content = [System.Text.Encoding]::Unicode.GetString($bytes, 0, $bytes.Length)
} elseif ($bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF) {
    Write-Host "UTF-8 BOM detected"
    $content = [System.Text.Encoding]::UTF8.GetString($bytes, 0, $bytes.Length)
} else {
    Write-Host "Assuming UTF-8 no BOM"
    $content = [System.Text.Encoding]::UTF8.GetString($bytes, 0, $bytes.Length)
}

$lines = $content -split "`n"
Write-Host "Total lines: $($lines.Count)"

# Print lines 869-872 (0-indexed: 868-871)
for ($i = 868; $i -le 872; $i++) {
    Write-Host "$($i+1): $($lines[$i])"
}