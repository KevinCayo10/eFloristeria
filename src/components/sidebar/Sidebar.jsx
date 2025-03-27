import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSidebarContext } from "./layout-context";
import { SidebarItem } from "./sidebar-item";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { DevIcon } from "../icons/sidebar/dev-icon";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import { Avatar, Tooltip } from "@nextui-org/react";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { SidebarMenu } from "./sidebar-menu";
import { Sidebar } from "./sidebar.styles";
import { CollapseItems } from "./collapse-items";
import CompaniesDropdown from "./companies-dropdown";
import { AuthContext } from "../../routes/AuthProvider";
import { SideMenuMainAdmin, SideMenuMainCustomer } from "../../data/MenuData";

function SidebarComponent() {
  const pathname = useLocation();
  const { collapsed, setCollapsed } = useSidebarContext();
  const { user } = useContext(AuthContext);

  return (
    <aside className="h-screen  sticky  border">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        {/* <div className={Sidebar.Header()}>
          <CompaniesDropdown />
        </div> */}
        <div className={Sidebar.Header()}></div>
        <div className="flex flex-col justify-between h-full ">
          <div className={Sidebar.Body()}>
            {/* <SidebarItem
              title="Home"
              icon={<HomeIcon />}
              isActive={pathname === "/admin/panel"}
              href="/admin/panel"
            /> */}
            <SidebarMenu title="Menu principal">
              {user && user.rol_usu !== "Admin"
                ? SideMenuMainCustomer.map((item, index) => {
                    return (
                      <SidebarItem
                        key={index}
                        isActive={pathname === item.url}
                        title={item.title}
                        icon={item.icon}
                        href={item.url}
                      />
                    );
                  })
                : SideMenuMainAdmin.map((item, index) => {
                    return (
                      <SidebarItem
                        key={index}
                        isActive={pathname === item.url}
                        title={item.title}
                        icon={item.icon}
                        href={item.url}
                      />
                    );
                  })}
            </SidebarMenu>
          </div>
          {/* <div className={Sidebar.Footer()}>
            <Tooltip content={"Settings"} color="primary">
              <div className="max-w-fit">
                <SettingsIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Adjustments"} color="primary">
              <div className="max-w-fit">
                <FilterIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Profile"} color="primary">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size="sm"
              />
            </Tooltip>
          </div> */}
        </div>
      </div>
    </aside>
  );
}

export default SidebarComponent;
