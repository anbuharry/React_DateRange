import React from "react";
import { DateRangePicker } from "materialui-daterange-picker";

const App = props => {
  const [open, setOpen] = React.useState(true);
  const [dateRange, setDateRange] = React.useState({});

  const toggle = () => setOpen(!open);

  return (
    <DateRangePicker
      open={open}
      toggle={toggle}
      onChange={(range) => setDateRange(range)}
    />
  );
}

export default App;