export default function Hello2(props) {
   return (
      <div>
         <h1>Pass mon 10d, {props.msg}</h1>
         <h1>{props.user.id}</h1>
      </div>
   );
}
