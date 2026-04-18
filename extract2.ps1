$lines = Get-Content 'C:\Users\Thorn\.openclaw\workspace\projects\arcane-forge\index.html'
# Find all <script> and </script> lines
$scriptRanges = @()
$inScript = $false
$startLine = -1
for ($i=0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match '<script>' -and -not $inScript) {
        $startLine = $i
        $inScript = $true
    }
    if ($lines[$i] -match '</script>' -and $inScript) {
        $scriptRanges += @{start=$startLine; end=$i}
        $inScript = $false
    }
}
foreach ($r in $scriptRanges) {
    Write-Host "Script block: lines $($r.start+1) to $($r.end+1) ($($r.end - $r.start - 1) content lines)"
}