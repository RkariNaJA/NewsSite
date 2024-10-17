import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";

async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month)) //convet selectedYear, selectedMonth to string by adding +
  ) {
    throw new Error("Invalid filter");
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year); //showing month
  }

  if (year && month) {
    links = [];
  }
  return (
    <headers id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`; // `/archive/${selectedYear}/${link}` link = month ; `/archive/${link}` link = year

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </headers>
  );
}

async function FilteredNews({ year, month }) {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year); // showing year
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }
  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  return newsContent;
}

export default async function FilteredNewsPage({ params }) {
  const filter = params.filter; // filter is a catch all route and it catches all path segmentss after archive and hold an array of all the matched path segments.

  const selectedYear = filter?.[0]; // check if filter is define or not and access the first item if filter is define.
  const selectedMonth = filter?.[1];

  return (
    <>
      {/*provide a custom loading fallback and handling the loading state of data */}
      <Suspense fallback={<p>Loading filter...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
