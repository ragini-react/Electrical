# Theme Toggle Testing Guide

## Steps to Test:

1. **Restart Dev Server:**
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```

2. **Open Browser:**
   - Go to: http://localhost:3000
   - Open DevTools (F12 or Cmd+Option+I)

3. **Test Toggle:**
   - Click the Moon/Sun icon in header (top right)
   - Check if `<html>` tag gets `class="dark"` added/removed
   - Watch background color change

4. **Check Console:**
   - Look for any errors in browser console
   - Check Network tab for failed requests

## If Still Not Working:

### Check 1: Verify HTML class
Open browser DevTools > Elements tab
Look at `<html>` tag - should be:
```html
<html lang="en" class="scroll-smooth dark">
```

### Check 2: Clear Browser Cache
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Or clear site data in DevTools

### Check 3: Verify next-themes installed
```bash
npm list next-themes
```

Should show: `next-themes@0.x.x`

## Expected Behavior:
- Click Moon icon → Background turns dark gray (#1a1a1a)
- Click Sun icon → Background turns white
- Icon switches between Moon and Sun
