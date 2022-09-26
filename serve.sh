# run $sh serve.sh on project root directory
# you need to have python3 installed to run this script
rm -rf build
npm run build
python3 -m http.server --directory build --bind 0.0.0.0 80