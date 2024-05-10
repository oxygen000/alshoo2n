import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table, TableTop } from "@/components/ui/table"
import { CardContent, Card } from "@/components/ui/card"
import { Label} from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"
import accounticon from '/public/placeholder-user.jpg'
import NavBarAdmin from '@/components/component/navbaradmin'
import HeaderAdmin from '@/components/component/headeradmin'

import './homeadmin.css'

export default function HomeAdmin() {
  return (
    (<div className="grid h-screen w-full min-h-screen lg:grid-cols-[300px_1fr]">

      <div className="min-h-screen">
      <NavBarAdmin/>
      </div>
      
      
      <div className="flex flex-col">
        <div className="">
        <HeaderAdmin/>
        </div>
        

        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4">
            <div className="flex items-center gap-2">
              <h1 className="font-semibold text-lg">Users</h1>
              <Button className="btn ml-auto border-double border-4 border-sky-500" size="sm">
                Add user
              </Button>
            </div>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableTop>
                      <TableHead className="w-[150px]">Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableTop>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center">
                          <div className="ml-2 font-medium">Alice Johnson</div>
                        </div>
                      </TableCell>
                      <TableCell>alice@example.com</TableCell>
                      <TableCell>Admin</TableCell>
                      <TableCell className="text-right">
                        <Button size="icon" variant="ghost">
                          <DeleteIcon className="w-4 h-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button size="icon" variant="ghost">
                          <TrashIcon className="w-4 h-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center">
                          
                          <div className="ml-2 font-medium">Bob Smith</div>
                        </div>
                      </TableCell>
                      <TableCell>bob@example.com</TableCell>
                      <TableCell>Editor</TableCell>
                      <TableCell className="text-right">
                        <Button size="icon" variant="ghost">
                          <DeleteIcon className="w-4 h-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button size="icon" variant="ghost">
                          <TrashIcon className="w-4 h-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center">
                          
                          <div className="ml-2 font-medium">Charlie Brown</div>
                        </div>
                      </TableCell>
                      <TableCell>charlie@example.com</TableCell>
                      <TableCell>Viewer</TableCell>
                      <TableCell className="text-right">
                        <Button size="icon" variant="ghost">
                          <DeleteIcon className="w-4 h-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button size="icon" variant="ghost">
                          <TrashIcon className="w-4 h-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4">
            <div className="flex items-center gap-2">
              <h1 className="font-semibold text-lg">Activity Log</h1>
              <Button className="btn ml-auto border-double border-4 border-sky-500" size="sm">
                Export
              </Button>
            </div>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableTop>
                      <TableHead className="w-[150px]">User</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead className="hidden md:table-cell">Date</TableHead>
                    </TableTop>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center">
                          
                          <div className="ml-2 font-medium">Alice Johnson</div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">Updated product details</TableCell>
                      <TableCell className="hidden md:table-cell">February 20, 2022</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center">
                          
                          <div className="ml-2 font-medium">Bob Smith</div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">Created new page: About Us</TableCell>
                      <TableCell className="hidden md:table-cell">January 5, 2022</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center">
                          
                          <div className="ml-2 font-medium">Charlie Brown</div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">Viewed order #1234</TableCell>
                      <TableCell className="hidden md:table-cell">August 3, 2021</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>

        <div className="border shadow-sm rounded-lg p-4 md:p-6">
            <h2 className="font-semibold text-lg md:text-2xl">Add New User</h2>
            <form className="grid gap-4 md:gap-6">
              <div className="grid gap-2">
                <Label htmlFor="user">User</Label>
                <Input id="user" placeholder="user" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">password</Label>
                <Input id="password" placeholder="Password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="permissions">Permissions</Label>
                <Select defaultValue="viewer" id="permissions">
                  <SelectTrigger>
                    <SelectValue placeholder="Select permissions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="btn w-full border-double border-4 border-sky-500 hover:bg-sky-700 " type="submit">
                Add User
              </Button>
            </form>
          </div>
      </div>
      
    </div>)
  );
}

function BellIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>)
  );
}


function DeleteIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
        
      <path opacity="0.15" d="M8 16H12L18 10L14 6L8 12V16Z" fill="#fffff"/>
<path d="M14 6L8 12V16H12L18 10M14 6L17 3L21 7L18 10M14 6L18 10M10 4L4 4L4 20L20 20V14" stroke="#fffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      
    </svg>)
  );
}


function FileTextIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>)
  );
}


function KeyIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
    </svg>)
  );
}


function MailIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>)
  );
}


function Package2Icon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function TrashIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>)
  );
}


function UsersIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}
