document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler
    document.getElementById('paymentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form fields
        const cardName = document.getElementById('card-name').value.trim();
        const cardNumber = document.getElementById('card-number').value.trim();
        const expiry = document.getElementById('expiry').value.trim();
        const cvv = document.getElementById('cvv').value.trim();
        const country = document.getElementById('country').value;
        const zip = document.getElementById('zip').value.trim();
        
        // Simple validation
        if (!cardName || !cardNumber || !expiry || !cvv || !country || !zip) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Validate card number (simple check for 16 digits)
        if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ''))) {
            alert('Please enter a valid 16-digit card number.');
            return;
        }
        
        // Validate expiry date (MM/YY format)
        if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(expiry)) {
            alert('Please enter a valid expiry date in MM/YY format.');
            return;
        }
        
        // Validate CVV (3 or 4 digits)
        if (!/^\d{3,4}$/.test(cvv)) {
            alert('Please enter a valid CVV (3 or 4 digits).');
            return;
        }
        
        // Simulate payment processing
        showLoading();
        
        // In a real app, you would send this data to your payment processor
        setTimeout(function() {
            hideLoading();
            document.getElementById('paymentModal').classList.add('active');
            
            // In a real app, you would handle the payment response here
            console.log('Payment submitted with:', {
                cardName,
                cardNumber: '**** **** **** ' + cardNumber.slice(-4),
                expiry,
                cvv,
                country,
                zip
            });
        }, 2000);
    });
    
    // Close modal handler
    document.getElementById('closeModal').addEventListener('click', function() {
        document.getElementById('paymentModal').classList.remove('active');
        // In a real app, you would redirect to a confirmation page
        // window.location.href = 'confirmation.html';
    });
    
    // Back button handler
    document.getElementById('backButton').addEventListener('click', function() {
        // In a real app, you would navigate back to the previous step
        alert('Going back to previous step');
        // window.location.href = 'details.html';
    });
    
    // Helper functions for loading state
    function showLoading() {
        const payButton = document.querySelector('.btn-pay');
        payButton.disabled = true;
        payButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    }
    
    function hideLoading() {
        const payButton = document.querySelector('.btn-pay');
        payButton.disabled = false;
        payButton.textContent = 'Pay Now';
    }
    
    // Format card number input
    document.getElementById('card-number').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '');
        if (value.length > 0) {
            value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
        }
        e.target.value = value;
    });
    
    // Format expiry date input
    document.getElementById('expiry').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value;
    });
});