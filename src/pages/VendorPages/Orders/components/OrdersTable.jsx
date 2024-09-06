import { Pagination, paginationItemClasses } from "@mui/material";
import Order from "@pages/VendorPages/Orders/components/Order";
import React, { useEffect, useState } from "react";

const tabs = [
  "All",
  "Pending",
  "Confirmed",
  "Shipped",
  "Cancelled",
  "Returned",
];

const orders = [
  {
    id: 1,
    user: "Mary Jones",
    numberOfItems: 3,
    amount: 120.99,
    created: "2023-09-04T10:23:45Z",
    status: "pending",
  },
  {
    id: 2,
    user: "John Doe",
    numberOfItems: 5,
    amount: 250.0,
    created: "2023-09-03T15:12:30Z",
    status: "shipped",
  },
  {
    id: 3,
    user: "Jane Smith",
    numberOfItems: 2,
    amount: 80.5,
    created: "2023-09-02T18:45:12Z",
    status: "delivered",
  },
  {
    id: 4,
    user: "Alice Johnson",
    numberOfItems: 4,
    amount: 150.25,
    created: "2023-09-01T12:00:00Z",
    status: "canceled",
  },
  {
    id: 5,
    user: "Bob Smith",
    numberOfItems: 6,
    amount: 300.75,
    created: "2023-08-31T18:30:00Z",
    status: "pending",
  },
  {
    id: 6,
    user: "Charlie Brown",
    numberOfItems: 1,
    amount: 50.99,
    created: "2023-08-30T15:15:00Z",
    status: "shipped",
  },
  {
    id: 7,
    user: "David Lee",
    numberOfItems: 3,
    amount: 120.99,
    created: "2023-08-29T12:00:00Z",
    status: "delivered",
  },
  {
    id: 8,
    user: "Emily Davis",
    numberOfItems: 2,
    amount: 80.5,
    created: "2023-08-28T18:45:00Z",
    status: "canceled",
  },
  {
    id: 9,
    user: "Frank Wilson",
    numberOfItems: 4,
    amount: 150.25,
    created: "2023-08-27T15:15:00Z",
    status: "pending",
  },
  {
    id: 10,
    user: "Grace Taylor",
    numberOfItems: 6,
    amount: 300.75,
    created: "2023-08-26T12:00:00Z",
    status: "shipped",
  },
  {
    id: 11,
    user: "Henry Hill",
    numberOfItems: 1,
    amount: 50.99,
    created: "2023-08-25T18:30:00Z",
    status: "delivered",
  },
  {
    id: 12,
    user: "Isabella Brown",
    numberOfItems: 3,
    amount: 120.99,
    created: "2023-08-24T15:15:00Z",
    status: "canceled",
  },
  {
    id: 13,
    user: "Jack Johnson",
    numberOfItems: 2,
    amount: 80.5,
    created: "2023-08-23T12:00:00Z",
    status: "pending",
  },
  {
    id: 14,
    user: "Kate Smith",
    numberOfItems: 4,
    amount: 150.25,
    created: "2023-08-22T18:30:00Z",
    status: "shipped",
  },
  {
    id: 15,
    user: "Liam Davis",
    numberOfItems: 6,
    amount: 300.75,
    created: "2023-08-21T15:15:00Z",
    status: "delivered",
  },
  {
    id: 16,
    user: "Mia Johnson",
    numberOfItems: 1,
    amount: 50.99,
    created: "2023-08-20T12:00:00Z",
    status: "canceled",
  },
  {
    id: 17,
    user: "Noah Brown",
    numberOfItems: 3,
    amount: 120.99,
    created: "2023-08-19T18:30:00Z",
    status: "pending",
  },
  {
    id: 18,
    user: "Olivia Taylor",
    numberOfItems: 2,
    amount: 80.5,
    created: "2023-08-18T15:15:00Z",
    status: "shipped",
  },
  {
    id: 19,
    user: "Paul Lee",
    numberOfItems: 4,
    amount: 150.25,
    created: "2023-08-17T12:00:00Z",
    status: "delivered",
  },
  {
    id: 20,
    user: "Quinn Davis",
    numberOfItems: 6,
    amount: 300.75,
    created: "2023-08-16T18:30:00Z",
    status: "canceled",
  },
];

const pageSizeOptions = [5, 10, 15, 20, 25];

const filterOptions = ["date", "time", "status", "no Of Items"];

const OrdersTable = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [filterOption, setFilterOption] = useState(filterOptions[0]);
  const [pagination, setPagination] = useState({
    pageSize: pageSizeOptions[0],
    from: 0,
    to: pageSizeOptions[0],
    page: 1,
  });

  const handlePageChange = (event, value) => {
    setPagination((present) => {
      return {
        ...present,
        from: (value - 1) * present.pageSize,
        to: (value - 1) * present.pageSize + present.pageSize,
        page: value,
      };
    });
  };

  return (
    <>
      <div className="flex items-center justify-between gap-4 py-2 my-4 flex-wrap">
        <div>
          <ul className="flex gap-x-2 lg:gap-x-4 flex-wrap">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  currentTab === index &&
                  "text-secondary2 border-b border-b-secondary2"
                }`}
                onClick={() => {
                  setCurrentTab(index);
                }}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2 items-center whitespace-nowrap">
          <div>Filter by:</div>
          <select
            name="fiterby"
            className="cursor-pointer outline-none border py-1 p-2 capitalize"
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            {filterOptions.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="my-2 mb-2 overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-[rgb(242,250,255)]">
              <th className="p-4 px-0 font-medium text-left w-10"></th>
              <th className="p-4 max-sm:px-2 font-medium text-left">SN</th>
              <th className="p-4 max-sm:px-2 font-medium text-left">Name</th>
              <th className="p-4 max-sm:px-2 font-medium text-left">
                No of items
              </th>
              <th className="p-4 max-sm:px-2 font-medium text-left">
                Amount(FCFA)
              </th>
              <th className="p-4 max-sm:px-2 font-medium text-left">Created</th>
              <th className="p-4 max-sm:px-2 font-medium text-left">Status</th>
              <th className="p-4 max-sm:px-2 font-medium text-left"></th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {orders
              .slice(pagination.from, pagination.to)
              .map(({ id, user, numberOfItems, amount, created, status }) => (
                <Order
                  key={id}
                  sn={id}
                  name={user}
                  numberOfItems={numberOfItems}
                  amount={amount}
                  created={created}
                  status={status}
                />
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between mb-8 text-sm text-text1 font-medium px-1 flex-wrap ga-y-2">
        <div>
          <span>Showing</span>
          <select
            name="count"
            className="p-1 px-2 outline-none border mx-2"
            value={pagination.pageSize}
            onChange={(e) => {
              setPagination((present) => {
                const newPageSize = Number(e.target.value);
                const newCount = Math.ceil(orders.length / newPageSize);
                const newPage =
                  present.page > newCount ? newCount : present.page;

                return {
                  ...present,
                  from: (newPage - 1) * newPageSize,
                  to: (newPage - 1) * newPageSize + newPageSize,
                  pageSize: newPageSize,
                  page: newPage > newCount ? newCount : newPage,
                };
              });
            }}
          >
            {pageSizeOptions.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
          <span>of {orders.length}</span>
        </div>
        <div>
          <Pagination
            count={Math.ceil(orders.length / pagination.pageSize)}
            shape="rounded"
            sx={{
              [`& .${paginationItemClasses.root}`]: {
                bgcolor: "#F1F2F6",
              },
              [`& .${paginationItemClasses.selected}, & .${paginationItemClasses.selected}:hover`]:
                {
                  bgcolor: "#DB4444 !important",
                  color: "#FFFFFF",
                },
            }}
            onChange={handlePageChange}
            page={pagination.page}
            size="small"
          />
        </div>
      </div>
    </>
  );
};

export default OrdersTable;
