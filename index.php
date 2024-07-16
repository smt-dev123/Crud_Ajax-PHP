<!DOCTYPE html>
<html>
<head>
    <title>PHP CRUD with AJAX</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="assets/script.js"></script>
</head>
<body>
    <h1>PHP CRUD with AJAX</h1>

    <form id="itemForm">
        <input type="hidden" id="itemId" name="id">
        <input type="text" id="itemName" name="name" placeholder="Name" required>
        <textarea id="itemDescription" name="description" placeholder="Description" required></textarea>
        <button type="submit">Save</button>
    </form>

    <h2>Items</h2>
    <table id="itemsTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
</body>
</html>