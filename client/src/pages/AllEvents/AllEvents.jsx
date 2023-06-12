import { useSelector } from "react-redux";
import moment from "moment";
import Cards from "../../components/Cards/Cards";
<<<<<<< HEAD
import "../../components/cards/cards.scss"
import InnerNav from "../../components/Nav/InnerNav";
import Footer from "../../components/Footer/Footer";
=======
import "../../components/cards/cards.scss";
import "./allevents.scss";
import { useState } from "react";
>>>>>>> 69ddd780717142da73721c89594cbb51a8d2823f
export default function AllEvents() {
  const [value, setValue] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [filterLoc, setFilterLoc] = useState("all");
  const [dateFilter, setDateFilter] = useState(null);

  const { events, categories } = useSelector((state) => state.categoryReducer);
  const location = [...new Set([...events.map((q) => q.locationName)])];
  const filteredData = events.filter((q) => {
    const formattedDate = moment(q.date).format("YYYY-MM-DD");
    const filterDate = dateFilter
      ? moment(dateFilter).format("YYYY-MM-DD")
      : null;

    return (
      q.name.toLowerCase().includes(value.toLowerCase()) &&
      (categoryFilter === "all" || q.category.type === categoryFilter) &&
      (filterLoc === "all" || q.locationName.includes(filterLoc)) &&
      (dateFilter === null || formattedDate === filterDate)
    );
  });
  const handleResetDateFilter = (e) => {
    e.preventDefault();
    setDateFilter(null);
  };

  return (
<<<<<<< HEAD
  <>
   <InnerNav/>
   <div className="container">
   {events.map((event) => {
     return <Cards key={event._id} {...event} />;
   })}
 </div>
 <Footer/>
  </>
=======
    <div className="container" style={{ marginTop: "100px" }}>
      <form className="form-control">
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <select
          name=""
          id=""
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="all">All</option>
          {categories.map((q) => (
            <option value={q.type} key={q._id}>
              {q.type}
            </option>
          ))}
        </select>
        <select name=" " id="" onChange={(e) => setFilterLoc(e.target.value)}>
          <option value="all">All</option>
          {location?.map((q, idx) => (
            <option key={idx} value={q}>
              {q}
            </option>
          ))}
        </select>
        <input type="date" onChange={(e) => setDateFilter(e.target.value)} />
        <button onClick={handleResetDateFilter}>reset date</button>
      </form>
      {filteredData.map((event) => {
        return <Cards key={event._id} {...event} />;
      })}
    </div>
>>>>>>> 69ddd780717142da73721c89594cbb51a8d2823f
  );
}
