// Minimal client-side handler — replace with real checkout integration (Stripe / Gumroad / PayPal)
document.getElementById('year').textContent = new Date().getFullYear();

function goToCheckout(tier){
  // Replace these with your real checkout links or API calls
  const links = {
    basic: "https://example.com/checkout/basic",
    premium: "https://example.com/checkout/premium",
    studio: "https://example.com/checkout/studio"
  };
  const url = links[tier] || links.premium;
  // Open checkout in new tab
  window.open(url, "_blank");
}

document.querySelectorAll('.buy').forEach(btn=>{
  btn.addEventListener('click', e => {
    const tier = btn.getAttribute('data-tier');
    goToCheckout(tier);
  });
});

document.getElementById('buyHero').addEventListener('click', ()=> goToCheckout('premium'));
document.getElementById('buyTop').addEventListener('click', ()=> goToCheckout('premium'));
document.getElementById('downloadSample').addEventListener('click', ()=> {
  // Link to your sample PDF or trigger download
  window.open('viral_girl_photo_editing_prompts_$1000_pack_with_cover.pdf', '_blank');
});
