import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Component() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 font-semibold"
          prefetch={false}
        >
          <Package2Icon className="h-6 w-6" />
          <span className="text-lg">Pantry Tracker</span>
        </Link>
        <div className="ml-auto flex items-center gap-2 p-4">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search items..."
              className="w-full rounded-lg bg-muted pl-8 pr-4 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  src="/avatar.jpg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                  style={{ aspectRatio: "36/36", objectFit: "cover" }}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden border-r bg-muted/40 sm:block">
          <nav className="flex h-full max-h-screen flex-col gap-4 p-4">
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg bg-primary p-2 text-primary-foreground"
              prefetch={false}
            >
              <PackageIcon className="h-5 w-5" />
              <span>Inventory</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <ListIcon className="h-5 w-5" />
              <span>Grocery List</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <BookOpenIcon className="h-5 w-5" />
              <span>Recipes</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <SettingsIcon className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-4 sm:p-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Pantry Inventory</CardTitle>
                <CardDescription>
                  View and manage your pantry items.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Flour</div>
                          <Badge variant="outline">2 lbs</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Expires: 2024-06-30
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Sugar</div>
                          <Badge variant="outline">4 lbs</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Expires: 2024-12-31
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Olive Oil</div>
                          <Badge variant="outline">32 oz</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Expires: 2025-03-15
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Pasta</div>
                          <Badge variant="outline">3 lbs</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Expires: 2024-09-01
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Rice</div>
                          <Badge variant="outline">10 lbs</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Expires: 2025-01-01
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Canned Tomatoes</div>
                          <Badge variant="outline">12 cans</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Expires: 2025-06-30
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Oats</div>
                          <Badge variant="outline">5 lbs</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Expires: 2024-11-15
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Canned Beans</div>
                          <Badge variant="outline">8 cans</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Expires: 2025-02-28
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Honey</div>
                          <Badge variant="outline">32 oz</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Expires: 2026-12-31
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Peanut Butter</div>
                          <Badge variant="outline">18 oz</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Expires: 2024-08-31
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Baking Soda</div>
                          <Badge variant="outline">1 lb</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Expires: 2025-05-01
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Baking Powder</div>
                          <Badge variant="outline">1 lb</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Expires: 2025-07-15
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <TrashIcon className="h-4 w" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

function BookOpenIcon(props) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function FilePenIcon(props) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function ListIcon(props) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}

function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function PackageIcon(props) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
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

function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
