document.addEventListener('DOMContentLoaded', () => {
    const selects = document.querySelectorAll('.pizza-select');
    const totalCostElement = document.getElementById('total-cost');

    function calculateTotalCost() {
        let totalCost = 0;
        selects.forEach(select => {
            const selectedValue = select.value;
            if (selectedValue) {
                totalCost += parseFloat(selectedValue);
            }
        });
        totalCostElement.textContent = totalCost.toFixed(2);
    }

    selects.forEach(select => {
        select.addEventListener('change', calculateTotalCost);
    });

    window.calculate = function() {
        calculateTotalCost();
    };

    calculateTotalCost();
});