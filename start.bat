@ECHO OFF

cd "C:\Users\archi\Desktop\GetItDone\Dev\get-it-done"

docker compose up -d
pause


explorer "http://localhost:3000"

npm run dev
pause




