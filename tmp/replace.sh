#!/bin/bash
# Read the file, replace all instances, and write back
cat /workspace/src/app/App.tsx | \
  perl -pe "s/font-\[\'DB_HeaventRounded\'\]/font-[\'Poppins\']/g" \
  > /tmp/App.tsx.new

# Move the new file back
mv /tmp/App.tsx.new /workspace/src/app/App.tsx
