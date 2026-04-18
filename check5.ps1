# Extract the script section from both files
$initialLines = Get-Content 'C:\Users\Thorn\.openclaw\workspace\temp_initial.html'
$currentLines = Get-Content 'C:\Users\Thorn\.openclaw\workspace\projects\arcane-forge\index.html'

# Find script start/end in both
$initialStart = -1; $initialEnd = -1
for ($i=0; $i -lt $initialLines.Count; $i++) {
    if ($initialLines[$i] -match '^\s*<script>\s*$' -and $initialStart -eq -1) { $initialStart = $i }
    # The LAST </script> is the main one (first is service worker)
    if ($initialLines[$i] -match '</script>') { $initialEnd = $i }
}
Write-Host "Initial: script lines $($initialStart+1) to $($initialEnd+1)"

$currentStart = -1; $currentEnd = -1
for ($i=0; $i -lt $currentLines.Count; $i++) {
    if ($currentLines[$i] -match '^\s*<script>\s*$' -and $currentStart -eq -1) { $currentStart = $i }
    if ($currentLines[$i] -match '</script>') { $currentEnd = $i }
}
Write-Host "Current: script lines $($currentStart+1) to $($currentEnd+1)"

# Save script sections for diffing
$initialScript = $initialLines[$initialStart..$initialEnd] -join "`n"
$currentScript = $currentLines[$currentStart..$currentEnd] -join "`n"

# Write to temp files for diff
Set-Content -Path 'C:\Users\Thorn\.openclaw\workspace\temp_initial_script.txt' -Value $initialScript -NoNewline
Set-Content -Path 'C:\Users\Thorn\.openclaw\workspace\temp_current_script.txt' -Value $currentScript -NoNewline