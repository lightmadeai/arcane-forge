$lines = Get-Content 'C:\Users\Thorn\.openclaw\workspace\projects\arcane-forge\index.html'
Write-Host "Total lines: $($lines.Count)"
# Check for obvious syntax issues
$inScript = $false
for ($i=0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match '<script>') { $inScript = $true }
    if ($lines[$i] -match '</script>') { $inScript = $false }
    if ($inScript -and ($lines[$i] -match 'return<' -or $lines[$i] -match 'return\s*<')) {
        Write-Host "SYNTAX ERROR at line $($i+1): $($lines[$i])"
    }
}