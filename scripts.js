function calculateBMI() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    height = height / 100;
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    let category = '';
    let gif = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        gif = 'underweight.gif';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        gif = 'mrbean.gif';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        gif = 'overweight.gif';
    } else {
        category = 'Obesity';
        gif = 'obesity.gif';
    }

    document.getElementById('result').innerHTML = `Your BMI is ${bmi} (${category}).`;

    if (gif !== '') {
        let existingGif = document.getElementById('bmiGif');
        if (existingGif) {
            existingGif.remove();
        }

        let img = document.createElement('img');
        img.src = gif;
        img.alt = `${category} GIF`;
        img.id = 'bmiGif';
        img.style.width = '200px';
        img.style.height = 'auto';

        document.getElementById('result').appendChild(img);
    }
}
