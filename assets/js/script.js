const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';
    let linkHref = ''; // Variável para armazenar o link

    // Remove existing links, if any
    const existingLink = document.getElementById('improvement-link');
    if (existingLink) {
        existingLink.remove();
    }

    value.classList.add('attention');
    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
        linkHref = 'https://www.medicoverhospitals.in/pt/symptoms/underweight';
    } 
    else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Você está no peso ideal!';
        value.classList.remove('attention');
        value.classList.add('normal');
    } 
    else if (bmi > 25 && bmi <= 30) {
        description = 'Cuidado! Você está com sobrepeso!';
        linkHref = 'https://www.gov.br/saude/pt-br/assuntos/saude-brasil/eu-quero-ter-peso-saudavel/noticias/2021/voce-sabe-a-diferenca-entre-sobrepeso-e-obesidade';
    } 
    else if (bmi > 30 && bmi <= 35) {
        description = 'Cuidado! Você está com obesidade moderada!';
        linkHref = 'https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/promocao-da-saude/fact-sheet-obesidade';
    } 
    else if (bmi > 35 && bmi <= 40) {
        description = 'Cuidado! Você está com obesidade severa!';
        linkHref = 'https://obesidadesevera.com.br/index.php/obesidade-severa/';
    } 
    else {
        description = 'Cuidado! Você está com obesidade mórbida!';
        linkHref = 'https://www.cuf.pt/saude-a-z/obesidade-morbida';
    }

    // Update the BMI value and description
    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;

// Add the improvement link if the BMI indicates an issue
    if (linkHref) {
    const improvementLinkDiv = document.createElement('div');
    improvementLinkDiv.id = 'improvement-link';
    improvementLinkDiv.style.marginTop = '1rem';

    const improvementLink = document.createElement('a');
    improvementLink.href = linkHref;
    improvementLink.target = '_blank';

    const iconElement = document.createElement('i');
    iconElement.className = "fa-sharp fa-solid fa-arrow-up-right-from-square";
    iconElement.style.marginRight = '0.5rem';

    const linkText = document.createTextNode('Descubra Como Melhorar Sua Saúde Agora!');

    improvementLink.appendChild(iconElement);
    improvementLink.appendChild(linkText);

    improvementLink.style.color = '#dc2626';
    improvementLink.style.fontSize = '0.875rem';
    improvementLink.style.textDecoration = 'none';
    improvementLink.style.transition = 'color 0.3s';

    improvementLink.onmouseover = function() {
        improvementLink.style.color = '#cbd5e1';
    };

    improvementLink.onmouseout = function() {
        improvementLink.style.color = '#dc2626';
    };

    improvementLinkDiv.appendChild(improvementLink);
    document.getElementById('more-info').appendChild(improvementLinkDiv);
}
});
