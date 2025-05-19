// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navList.classList.toggle('active');
    
    // Animation des barres du menu burger
    if (menuToggle.classList.contains('active')) {
        menuToggle.querySelector('.bar:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 5px)';
        menuToggle.querySelector('.bar:nth-child(2)').style.opacity = '0';
        menuToggle.querySelector('.bar:nth-child(3)').style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        menuToggle.querySelector('.bar:nth-child(1)').style.transform = 'rotate(0) translate(0)';
        menuToggle.querySelector('.bar:nth-child(2)').style.opacity = '1';
        menuToggle.querySelector('.bar:nth-child(3)').style.transform = 'rotate(0) translate(0)';
    }
});

// Fermer le menu quand on clique sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.querySelector('.bar:nth-child(1)').style.transform = 'rotate(0) translate(0)';
        menuToggle.querySelector('.bar:nth-child(2)').style.opacity = '1';
        menuToggle.querySelector('.bar:nth-child(3)').style.transform = 'rotate(0) translate(0)';
    });
});

// Gestion de la recherche
const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.search-box');
const closeSearch = document.querySelector('.close-search');

searchBtn.addEventListener('click', () => {
    searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
});

closeSearch.addEventListener('click', () => {
    searchBox.style.display = 'none';
});

// Fermer la recherche quand on clique en dehors
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        searchBox.style.display = 'none';
    }
});

// Changement d'onglet actif
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Animation au scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        header.style.padding = '10px 0';
    } else {
        header.style.boxShadow = 'none';
        header.style.padding = '15px 0';
    }
});

// Highlight de la ligne en tête du classement
document.addEventListener('DOMContentLoaded', () => {
    const firstRow = document.querySelector('.ranking-table tbody tr:first-child');
    if (firstRow) {
        firstRow.style.backgroundColor = 'rgba(255, 107, 0, 0.1)';
        firstRow.style.fontWeight = 'bold';
    }
});