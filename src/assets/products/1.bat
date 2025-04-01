@echo off
cd /d "C:\Users\52449\Downloads\SystemOffice\SystemOffice\src\assets\products"
magick mogrify -resize 500x500 *.webp
magick mogrify -format webp -quality 80 *.webp
echo ¡Optimización completada!
pause
