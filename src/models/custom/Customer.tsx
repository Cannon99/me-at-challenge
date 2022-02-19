export interface Customer {
    name: string
    email: string
    id: string
    deleteCustomer?: (id: string) => void
}
