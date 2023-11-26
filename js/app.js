document.addEventListener('DOMContentLoaded', function(){
    
    const $toggle =  document.getElementById('toggle')
    const $range = document.getElementById('rangePriceViews');
    const $Pageviews = document.getElementById('Pageviews')
    let $price = document.getElementById('price')

    $toggle.checked = false;

    $Pageviews.textContent = '100K Pageviews'
    $price.textContent = '$16.00'

    $range.addEventListener('input', DisplayViewsPrice);

    $toggle.addEventListener('change',calcular)

    
    function DisplayViewsPrice(e){
        const valores = ["10K", "50K", "100K", "500K", "1M"];
        const indice = e.target.value / (e.target.max / (valores.length - 1));
        
        let view =  valores[Math.round(indice)]

        $Pageviews.textContent =  view + ' '+ 'Pageviews';

        if(view === '10K')   $price.textContent = '$8.00';
        
        if(view === '50K')   $price.textContent = '$12.00';
         
        if(view === '100K')  $price.textContent = '$16.00';
    
        if(view === '500K')  $price.textContent = '$24.00';

        if(view === '1M')    $price.textContent = '$36.00';

        $toggle.checked = false;
    }

    function calcular(e){
        
        if (e.target.checked) {   
              factureAnual = (parseInt($price.textContent.slice(1,3))  * 12) *.75
              $price.textContent = `$${factureAnual}.00`
        } else { 
            $price.textContent = `$${parseInt($price.textContent.slice(1,4))/9}.00` 
        }
    }


})
