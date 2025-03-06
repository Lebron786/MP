// JavaScript to trigger additional animations or interactions
document.addEventListener('DOMContentLoaded', function() {
    // You can add more animations or effects here if you'd like
    const heart = document.querySelector('.heart');
    heart.addEventListener('animationiteration', () => {
        console.log("Heart animation iteration!");
    });
});
