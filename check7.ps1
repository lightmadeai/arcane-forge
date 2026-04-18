$bytes = [System.IO.File]::ReadAllBytes('C:\Users\Thorn\.openclaw\workspace\temp_initial.html')
$content = [System.Text.Encoding]::Unicode.GetString($bytes, 0, $bytes.Length)
$lines = $content -split "`n"

# Search for svg-data.js reference or BLADES definition
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match 'svg-data\.js|BLADES\s*=\s*\[' -or $lines[$i] -match 'let METALS|let AURAS|loadSVGData') {
        Write-Host "$($i+1): $($lines[$i].Substring(0, [Math]::Min(120, $lines[$i].Length)))"
    }
}