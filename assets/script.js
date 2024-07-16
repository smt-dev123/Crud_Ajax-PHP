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

    fetchItems();

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
});
