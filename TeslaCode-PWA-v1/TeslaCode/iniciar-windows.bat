@echo off
cd /d "%~dp0"
echo.
echo ==================================
echo         TESLACODE V1.0
 echo ==================================
echo.
echo Abre http://localhost:8000 en tu navegador.
echo Para detener el servidor pulsa Ctrl+C.
echo.
where py >nul 2>nul
if %errorlevel%==0 (
  start "" "http://localhost:8000"
  py -m http.server 8000
) else (
  where python >nul 2>nul
  if %errorlevel%==0 (
    start "" "http://localhost:8000"
    python -m http.server 8000
  ) else (
    echo No se encontro Python. Instala Python o abre con VS Code Live Server.
    pause
  )
)
