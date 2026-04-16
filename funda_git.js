/* Github digunakan untuk penyimpanan (repository) coding
operasional di Github :
1. Menyimpan coding (Repository)
2. Version kontrol (Melacak perubahan kode dari waktu ke waktu, history editing)
3. Kolaborasi tim
4. Portofolio
5. Open source
6. Deploy & hosting sederhana

Istilah pada Git
1. Add : digunakan menandai file yang mau di-commit
2. commit : digunakan untuk persetujuan perubahan
3. push : mengirimkan hasil commit repo online (github) (sync)
4. fetch : mengecek reposotory online dan dibandingkan dengan local > show perubahan dengan online repo
5. pull : mengambil perubahan terbaru pada online repo
6. fork : copy repo milik org lain ke akun github kita
7. branch :> membuat cabang dari repository
8. clone : Mengunduh repo dari Github 

alur kerja di Github
1.  Set Up Awal 
    git config --global user.name "Nama user"
    git config --global user.email "Email user"
2. Clone 
    git clone https://github.com/username/nama-repo.git
    cd nama-repo
3. Pull < Selalu lakukan pull sebelum mulai kerja agar file uptodate
    git pull origin main
4. Add .
    git add (nama file.txt,html,js,css)  < satu file
    git add . < semua file yang berubah
5. Commit 
     git commit -m "Learn_Fundamental"
6. Push
    git push origin main

     */