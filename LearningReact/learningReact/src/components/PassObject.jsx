function PassObject({obj}) {
    return (
        <>
            {obj.age >= 18 ? (
                <>
                    <p>You were born {obj.age} years ago.</p>
                    <h1>Your name is {obj.name}</h1>
                    <h2 style={{color: obj.favColor}}>Your favourite color is {obj.favColor}</h2>
                </>
            ) : (
                <h1>Go to hell ur a minor !</h1>
            )}
        </>
    )
}

export default PassObject