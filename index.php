<!DOCTYPE html>
<html>
<head>
    <title>PHP CRUD with AJAX</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="assets/script.js"></script>
</head>
<body>
    <h1>PHP CRUD with AJAX</h1>

    <h2>Items</h2>
    <form id="itemForm">
        <input type="hidden" id="itemId" name="id">
        <input type="text" id="itemName" name="name" placeholder="Name" required>
        <textarea id="itemDescription" name="description" placeholder="Description" required></textarea>
        <button type="submit">Save Item</button>
    </form>

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

    <h2>Customers</h2>
    <form id="customerForm">
        <input type="hidden" id="customerId" name="id">
        <input type="text" id="customerName" name="name" placeholder="Name" required>
        <input type="email" id="customerEmail" name="email" placeholder="Email" required>
        <button type="submit">Save Customer</button>
    </form>

    <table id="customersTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
</body>
</html>
