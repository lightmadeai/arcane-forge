$lines = Get-Content 'C:\Users\Thorn\.openclaw\workspace\temp_initial.html'
Write-Host "Total lines: $($lines.Count)"
for ($i=0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match 'mGrad|gFilter') {
        Write-Host "$($i+1): $($lines[$i])"
    }
}