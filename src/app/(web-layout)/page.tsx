import CustomLink from "@/components/ui/CustomLink/CustomLink";
import { getMetadata } from "@/utils/helper-functions";

export const metadata = getMetadata({
  title: "Home",
});

const Home = () => {
  return (
    <div className="space-y-5">
      <h3 className="text-2xl">Home</h3>
      <ul className="list-disc">
        <li>
          <CustomLink href="/users">Users</CustomLink>
        </li>
        <li>
          <CustomLink href="/profile">Profile</CustomLink>
        </li>
        <li>
          <CustomLink href="/about-us">About us</CustomLink>
        </li>
        <li>
          <CustomLink href="/dashboard">Dashboard</CustomLink>
        </li>
      </ul>
      <p className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md border-default">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione alias
        sit ex perspiciatis illum magnam suscipit minus modi, veritatis animi
        maiores ab deleniti facilis saepe, possimus at quo! Dolorem, unde! Sunt
        suscipit excepturi, sed officiis veritatis architecto sint maiores
        dolore, totam delectus veniam reprehenderit molestiae eum minus magni
        numquam iusto eveniet odit assumenda labore eaque, temporibus rerum
        dicta. Magnam, obcaecati. Laudantium dolorem voluptatum iusto
        consectetur minus iure illum repellat molestias ducimus soluta velit
        alias, aliquid cumque vitae tenetur sed at facere. Blanditiis, ea totam?
        Facilis quidem hic fugiat quis aspernatur.
      </p>
    </div>
  );
};

export default Home;
