
const user = {
     name: 'A Lady with No name',
     imageUrl: 'https://img.freepik.com/free-vector/hand-drawn-ethnic-beauty-illustration_23-2150216588.jpg?t=st=1718098168~exp=1718101768~hmac=bab66ff05c0ceae32f0f7e8f2fc7cf441d17dd8465b96b4c45e8bc13ecb47213&w=1060',
     imageSize: 90,
};

export default function Profile() {
     return (
          <div className="avatarCon">
               <h2 className="ImgTitle">{user.name} &nbsp;&nbsp;</h2>
               <img
                    className="avatar"
                    src={user.imageUrl}
                    alt={'Photo of ' + user.name}
                    style={{
                         width: user.imageSize,
                         height: user.imageSize
                    }}
               />
          </div>
     );
}