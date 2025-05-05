import { Product } from "./product";
import { Warehouse } from "./warehouse";
import { Reporting } from "./reporting";
import { Money } from "./money";

// Create some money instances
const money1 = new Money(10, 150, "$");
const money2 = new Money(5, 50, "$");
const money3 = new Money(20, 99, "$");
const money4 = new Money(15, 200, "$");

// Create some product instances
const laptop = new Product("Laptop", money1);
const phone = new Product("Phone", money2);
const tablet = new Product("Tablet", money3);
const headset = new Product("Headset", money4);

laptop.display();
phone.display();
tablet.display();
headset.display();

phone.decreasePrice(new Money(1, 50, "$"));
tablet.decreasePrice(new Money(2, 0, "$"));

phone.display();
tablet.display();

const warehouseLaptop = new Warehouse(laptop, 50, "pcs", new Date());
const warehousePhone = new Warehouse(phone, 100, "pcs", new Date());
const warehouseTablet = new Warehouse(tablet, 75, "pcs", new Date());
const warehouseHeadset = new Warehouse(headset, 200, "pcs", new Date());

const reporting = new Reporting();

reporting.registerArrival(warehouseLaptop);
reporting.registerArrival(warehousePhone);
reporting.registerArrival(warehouseTablet);
reporting.registerArrival(warehouseHeadset);

reporting.registerShipment("Laptop", 20);
reporting.registerShipment("Phone", 50);
reporting.registerShipment("Headset", 30);

reporting.inventoryReport();
