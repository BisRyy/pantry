"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Component() {
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: "Apples",
      quantity: 25,
      lowStockThreshold: 10,
      expirationDate: "2023-09-15",
      purchaseHistory: [
        { date: "2023-03-01", quantity: 10 },
        { date: "2023-04-15", quantity: 15 },
      ],
      consumptionRate: 2,
    },
    {
      id: 2,
      name: "Bread",
      quantity: 8,
      lowStockThreshold: 5,
      expirationDate: "2023-07-01",
      purchaseHistory: [{ date: "2023-05-01", quantity: 12 }],
      consumptionRate: 3,
    },
    {
      id: 3,
      name: "Eggs",
      quantity: 12,
      lowStockThreshold: 6,
      expirationDate: "2023-06-30",
      purchaseHistory: [
        { date: "2023-04-20", quantity: 12 },
        { date: "2023-05-10", quantity: 12 },
      ],
      consumptionRate: 4,
    },
    {
      id: 4,
      name: "Milk",
      quantity: 3,
      lowStockThreshold: 2,
      expirationDate: "2023-06-25",
      purchaseHistory: [{ date: "2023-05-01", quantity: 4 }],
      consumptionRate: 1,
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showAddItem, setShowAddItem] = useState(false);
  const [newItemImage, setNewItemImage] = useState(null);
  const [newItemName, setNewItemName] = useState("");
  const [newItemQuantity, setNewItemQuantity] = useState(0);
  const [newItemLowStockThreshold, setNewItemLowStockThreshold] = useState(0);
  const [newItemExpirationDate, setNewItemExpirationDate] = useState("");
  const [shoppingList, setShoppingList] = useState([]);
  const filteredInventory = useMemo(() => {
    return inventory
      .filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortOrder === "asc") {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        } else {
          return a[sortBy] < b[sortBy] ? 1 : -1;
        }
      });
  }, [inventory, searchTerm, sortBy, sortOrder]);
  const lowStockItems = useMemo(() => {
    return filteredInventory.filter(
      (item) => item.quantity <= item.lowStockThreshold
    );
  }, [filteredInventory]);
  const handleAddItem = async () => {
    if (
      // newItemImage &&
      newItemName &&
      newItemQuantity > 0 &&
      newItemLowStockThreshold >= 0
    ) {
      const newItem = {
        id: inventory.length + 1,
        name: newItemName,
        quantity: newItemQuantity,
        lowStockThreshold: newItemLowStockThreshold,
        expirationDate: newItemExpirationDate,
        purchaseHistory: [],
        consumptionRate: 0,
      };
      setInventory([...inventory, newItem]);
      setShowAddItem(false);
      setNewItemImage(null);
      setNewItemName("");
      setNewItemQuantity(0);
      setNewItemLowStockThreshold(0);
      setNewItemExpirationDate("");
    }
  };
  const handleRemoveItem = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };
  const handleUpdateItem = (id, updates) => {
    setInventory(
      inventory.map((item) => (item.id === id ? { ...item, ...updates } : item))
    );
  };
  const handleAddToShoppingList = (item) => {
    setShoppingList([...shoppingList, item]);
  };
  const handleRemoveFromShoppingList = (index) => {
    const updatedList = [...shoppingList];
    updatedList.splice(index, 1);
    setShoppingList(updatedList);
  };
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <h1 className="text-2xl font-bold">Pantry Inventory</h1>
      </header>
      <main className="flex-1 grid grid-cols-[1fr_300px] gap-6 p-6">
        <div className="grid gap-6">
          <div className="flex items-center justify-between">
            <div className="relative w-full max-w-md">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
            <Button
              className="justify-self-end"
              onClick={() => setShowAddItem(true)}
            >
              <span className="mr-2">+</span>
              Add New Item
            </Button>
            <Link
              href="/dashboard/list"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Inventory
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <span>Sort by</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuRadioGroup
                  value={sortBy}
                  onValueChange={setSortBy}
                >
                  <DropdownMenuRadioItem value="name">
                    Name
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="quantity">
                    Quantity
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="expirationDate">
                    Expiration Date
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={sortOrder}
                  onValueChange={setSortOrder}
                >
                  <DropdownMenuRadioItem value="asc">
                    Ascending
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="desc">
                    Descending
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="grid gap-4">
            {filteredInventory.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>
                    {item.quantity} in stock (Low stock threshold:{" "}
                    {item.lowStockThreshold})
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div>
                      <span className="font-medium">Expiration Date:</span>{" "}
                      {item.expirationDate}
                    </div>
                    <div>
                      <span className="font-medium">Purchase History:</span>
                      <ul className="list-disc pl-4">
                        {item.purchaseHistory.map((purchase, index) => (
                          <li key={index}>
                            {purchase.date} - {purchase.quantity} items
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-medium">Consumption Rate:</span>{" "}
                      {item.consumptionRate} items per week
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between gap-5">
                  <Button
                    variant="outline"
                    onClick={() => handleAddToShoppingList(item)}
                  >
                    Add to Shopping List
                  </Button>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      onClick={() =>
                        handleUpdateItem(item.id, {
                          quantity: item.quantity + 1,
                        })
                      }
                    >
                      +
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() =>
                        handleUpdateItem(item.id, {
                          quantity: item.quantity - 1,
                        })
                      }
                    >
                      -
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
            {filteredInventory.length === 0 && (
              <div className="text-center text-muted-foreground h-96 flex justify-center items-center">
                No items found.
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Low Stock Items</CardTitle>
              <CardDescription>
                Items that are running low and need to be restocked.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {lowStockItems.length > 0 ? (
                <ul className="grid gap-2">
                  {lowStockItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between"
                    >
                      <span>{item.name}</span>
                      <span>{item.quantity} in stock</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center text-muted-foreground">
                  No low stock items.
                </div>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shopping List</CardTitle>
              <CardDescription>Items you need to purchase.</CardDescription>
            </CardHeader>
            <CardContent>
              {shoppingList.length > 0 ? (
                <ul className="grid gap-2">
                  {shoppingList.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span>{item.name}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRemoveFromShoppingList(index)}
                      >
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center text-muted-foreground">
                  Your shopping list is empty.
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      {showAddItem && (
        <Dialog open={showAddItem} onOpenChange={setShowAddItem}>
          <DialogContent className="grid gap-4 w-[400px]">
            <DialogHeader>
              <DialogTitle>Add New Item</DialogTitle>
              <DialogDescription>
                Use the form below to add a new item to your pantry inventory.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-2">
              <Label htmlFor="image">Item Image</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => setNewItemImage(e.target.files[0])}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Item Name</Label>
              <Input
                id="name"
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                type="number"
                value={newItemQuantity}
                onChange={(e) => setNewItemQuantity(parseInt(e.target.value))}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lowStockThreshold">Low Stock Threshold</Label>
              <Input
                id="lowStockThreshold"
                type="number"
                value={newItemLowStockThreshold}
                onChange={(e) =>
                  setNewItemLowStockThreshold(parseInt(e.target.value))
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="expirationDate">Expiration Date</Label>
              <Input
                id="expirationDate"
                type="date"
                value={newItemExpirationDate}
                onChange={(e) => setNewItemExpirationDate(e.target.value)}
              />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowAddItem(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddItem}>Add Item</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
