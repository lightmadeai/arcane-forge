$lines = Get-Content 'C:\Users\Thorn\.openclaw\workspace\projects\arcane-forge\index.html'
$scriptContent = $lines[396..1396] -join "`n"
Set-Content -Path 'C:\Users\Thorn\.openclaw\workspace\temp_forge_script.js' -Value $scriptContent -NoNewline
Write-Host "Script extracted, length: $($scriptContent.Length)"