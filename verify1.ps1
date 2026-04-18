$lines = Get-Content 'C:\Users\Thorn\.openclaw\workspace\projects\arcane-forge\index.html'
Write-Host "Total lines: $($lines.Count)"

# Check the fixed lines
for ($i=953; $i -le 957; $i++) {
    Write-Host "$($i+1): $($lines[$i])"
}