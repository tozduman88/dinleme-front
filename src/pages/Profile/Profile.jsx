const tg = window.Telegram.WebApp;

const Profile = () => {
    return (
        <>
            <h3>Мой профиль</h3>
            <p> Hi user {tg.initDataUnsafe.user.id}</p>
        </>
    );
};

export default Profile;
