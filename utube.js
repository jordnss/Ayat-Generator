
// import the quran verses (The Clear Quran)
// fetch total number of verses (6236) for both english and arabic translation
// create a function when you hit button, program will fetch verses
//  math.floor to generate
// const randomVerseIndex = Math.floor(Math.random() * totalVerses) + 1;




document.getElementById('generateBtn').addEventListener('click', async () => {
    try {
        // Fetching the first verse to get the total number of verses (if needed)
        const response = await fetch("https://api.alquran.cloud/v1/ayah/1");
        const data = await response.json();

        // 1 to 6236 Verses
        const totalVerses = 6236;
        const randomVerseIndex = Math.floor(Math.random() * totalVerses) + 1;

        // 2 seprate fetches are needed for both translations
        //English Fetch
        const englishResponse = await fetch(`https://api.alquran.cloud/v1/ayah/${randomVerseIndex}/en.asad`);
        const englishData = await englishResponse.json();

        //Arabic Fetch
        const arabicResponse = await fetch(`https://api.alquran.cloud/v1/ayah/${randomVerseIndex}/ar`);
        const arabicData = await arabicResponse.json();

        const englishText = englishData.data.text;
        const arabicText = arabicData.data.text;
        const surahNumber = englishData.data.surah.number;
        const ayahNumber = englishData.data.numberInSurah;


         // Display both translations 
         document.getElementById('quranVerses').value = 
         `Surah: ${surahNumber}, Ayah: ${ayahNumber}\n\n` +
         `${arabicText}\n\n` +
         `${englishText}`;

    } catch (error) {
        console.error('Error fetching verse:', error);
    }
});