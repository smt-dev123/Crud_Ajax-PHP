<?php
require_once 'db.php';
require_once 'Item.php';
require_once 'Customer.php';

$database = new Database();
$db = $database->getConnection();
$item = new Item($db);
$customer = new Customer($db);

$action = $_POST['action'];

if ($action == 'create') {
    $item->name = $_POST['name'];
    $item->description = $_POST['description'];
    if ($item->create()) {
        echo json_encode(["message" => "Item was created."]);
    } else {
        echo json_encode(["message" => "Unable to create item."]);
    }
} else if ($action == 'read') {
    $stmt = $item->read();
    $items = [];
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $items[] = ["id" => $id, "name" => $name, "description" => $description, "created_at" => $created_at];
    }
    echo json_encode($items);
} else if ($action == 'readSingle') {
    $item->id = $_POST['id'];
    $item->readSingle();
    echo json_encode(["id" => $item->id, "name" => $item->name, "description" => $item->description]);
} else if ($action == 'update') {
    $item->id = $_POST['id'];
    $item->name = $_POST['name'];
    $item->description = $_POST['description'];
    if ($item->update()) {
        echo json_encode(["message" => "Item was updated."]);
    } else {
        echo json_encode(["message" => "Unable to update item."]);
    }
} else if ($action == 'delete') {
    $item->id = $_POST['id'];
    if ($item->delete()) {
        echo json_encode(["message" => "Item was deleted."]);
    } else {
        echo json_encode(["message" => "Unable to delete item."]);
    }
} else if ($action == 'createCustomer') {
    $customer->name = $_POST['name'];
    $customer->email = $_POST['email'];
    if ($customer->create()) {
        echo json_encode(["message" => "Customer was created."]);
    } else {
        echo json_encode(["message" => "Unable to create customer."]);
    }
} else if ($action == 'readCustomers') {
    $stmt = $customer->read();
    $customers = [];
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $customers[] = ["id" => $id, "name" => $name, "email" => $email, "created_at" => $created_at];
    }
    echo json_encode($customers);
} else if ($action == 'readSingleCustomer') {
    $customer->id = $_POST['id'];
    $customer->readSingle();
    echo json_encode(["id" => $customer->id, "name" => $customer->name, "email" => $customer->email]);
} else if ($action == 'updateCustomer') {
    $customer->id = $_POST['id'];
    $customer->name = $_POST['name'];
    $customer->email = $_POST['email'];
    if ($customer->update()) {
        echo json_encode(["message" => "Customer was updated."]);
    } else {
        echo json_encode(["message" => "Unable to update customer."]);
    }
} else if ($action == 'deleteCustomer') {
    $customer->id = $_POST['id'];
    if ($customer->delete()) {
        echo json_encode(["message" => "Customer was deleted."]);
    } else {
        echo json_encode(["message" => "Unable to delete customer."]);
    }
}
?>
