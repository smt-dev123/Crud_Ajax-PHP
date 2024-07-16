$(document).ready(function() {
    function fetchItems() {
        $.ajax({
            url: 'ajax.php',
            type: 'POST',
            data: { action: 'read' },
            dataType: 'json',
            success: function(data) {
                var itemsTable = $('#itemsTable tbody');
                itemsTable.empty();
                $.each(data, function(index, item) {
                    itemsTable.append('<tr>' +
                        '<td>' + item.name + '</td>' +
                        '<td>' + item.description + '</td>' +
                        '<td>' +
                            '<button class="editBtn" data-id="' + item.id + '">Edit</button>' +
                            '<button class="deleteBtn" data-id="' + item.id + '">Delete</button>' +
                        '</td>' +
                    '</tr>');
                });
            }
        });
    }

    function fetchCustomers() {
        $.ajax({
            url: 'ajax.php',
            type: 'POST',
            data: { action: 'readCustomers' },
            dataType: 'json',
            success: function(data) {
                var customersTable = $('#customersTable tbody');
                customersTable.empty();
                $.each(data, function(index, customer) {
                    customersTable.append('<tr>' +
                        '<td>' + customer.name + '</td>' +
                        '<td>' + customer.email + '</td>' +
                        '<td>' +
                            '<button class="editCustomerBtn" data-id="' + customer.id + '">Edit</button>' +
                            '<button class="deleteCustomerBtn" data-id="' + customer.id + '">Delete</button>' +
                        '</td>' +
                    '</tr>');
                });
            }
        });
    }

    fetchItems();
    fetchCustomers();

    $('#itemForm').on('submit', function(e) {
        e.preventDefault();
        var formData = $(this).serialize() + '&action=create';
        if ($('#itemId').val()) {
            formData = $(this).serialize() + '&action=update';
        }

        $.ajax({
            url: 'ajax.php',
            type: 'POST',
            data: formData,
            dataType: 'json',
            success: function(response) {
                alert(response.message);
                fetchItems();
                $('#itemForm')[0].reset();
                $('#itemId').val('');
            }
        });
    });

    $(document).on('click', '.editBtn', function() {
        var id = $(this).data('id');
        $.ajax({
            url: 'ajax.php',
            type: 'POST',
            data: { id: id, action: 'readSingle' },
            dataType: 'json',
            success: function(data) {
                $('#itemId').val(data.id);
                $('#itemName').val(data.name);
                $('#itemDescription').val(data.description);
            }
        });
    });

    $(document).on('click', '.deleteBtn', function() {
        var id = $(this).data('id');
        if (confirm('Are you sure you want to delete this item?')) {
            $.ajax({
                url: 'ajax.php',
                type: 'POST',
                data: { id: id, action: 'delete' },
                dataType: 'json',
                success: function(response) {
                    alert(response.message);
                    fetchItems();
                }
            });
        }
    });

    $('#customerForm').on('submit', function(e) {
        e.preventDefault();
        var formData = $(this).serialize() + '&action=createCustomer';
        if ($('#customerId').val()) {
            formData = $(this).serialize() + '&action=updateCustomer';
        }

        $.ajax({
            url: 'ajax.php',
            type: 'POST',
            data: formData,
            dataType: 'json',
            success: function(response) {
                alert(response.message);
                fetchCustomers();
                $('#customerForm')[0].reset();
                $('#customerId').val('');
            }
        });
    });

    $(document).on('click', '.editCustomerBtn', function() {
        var id = $(this).data('id');
        $.ajax({
            url: 'ajax.php',
            type: 'POST',
            data: { id: id, action: 'readSingleCustomer' },
            dataType: 'json',
            success: function(data) {
                $('#customerId').val(data.id);
                $('#customerName').val(data.name);
                $('#customerEmail').val(data.email);
            }
        });
    });

    $(document).on('click', '.deleteCustomerBtn', function() {
        var id = $(this).data('id');
        if (confirm('Are you sure you want to delete this customer?')) {
            $.ajax({
                url: 'ajax.php',
                type: 'POST',
                data: { id: id, action: 'deleteCustomer' },
                dataType: 'json',
                success: function(response) {
                    alert(response.message);
                    fetchCustomers();
                }
            });
        }
    });
});
