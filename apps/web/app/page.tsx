import { trpc } from '@web/app/trpc';
import SideMenu, { sampleItems } from '@web/components/layout/SideMenu';

export default async function Home() {
  //const { greeting } = await trpc.getUsers.query({
  //  name: `Tom from backend 💚`,
  //});
  return (
    <>
      <button className="btn">daisyUI Button</button>
      <div style={{ background: 'coral' }}>
        <SideMenu menuItems={sampleItems}/>
        <div>testtstststs</div>
      </div>
    </>
  );
}
