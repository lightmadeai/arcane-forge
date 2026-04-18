# Extract the JS from the script tag and check with Node.js
$lines = Get-Content 'C:\Users\Thorn\.openclaw\workspace\projects\arcane-forge\index.html'
$scriptStart = -1; $scriptEnd = -1
$scriptCount = 0
for ($i=0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match '<script>') { 
        $scriptCount++
        if ($scriptCount -eq 2) { $scriptStart = $i }  # Second script tag is the main one
    }
    if ($lines[$i] -match '</script>' -and $scriptStart -ge 0) { 
        $scriptEnd = $i; break 
    }
}
Write-Host "Main script: lines $($scriptStart+1) to $($scriptEnd+1)"

$scriptLines = $lines[($scriptStart+1)..($scriptEnd-1)]
$scriptContent = $scriptLines -join "`n"
Set-Content -Path 'C:\Users\Thorn\.openclaw\workspace\temp_forge_script.js' -Value $scriptContent -NoNewline