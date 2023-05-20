import { IChallengeImage } from "api/types"
import { updatePreferences } from "api"
import { useContext } from "react"
import { AuthContext } from "context/AuthContext"

const Voting = ({ img }: {img: IChallengeImage}) => {
    const { currentUser } = useContext(AuthContext)

    const handleUpvote = async () => {
        // todo console logs to react toast
        if (!currentUser){
            console.warn('User not logged in')
            return
        }
         
        const res = await updatePreferences(img, true, currentUser.uid)
        console.log(`user ${currentUser.uid} upvoted image ${img.id} - ${JSON.stringify(res)}`)
        img.preferenceStats = res.preferenceStats
    }
    const handleDownvote = async () => {
        // todo console logs to react toast
        if (!currentUser){
            console.warn('User not logged in')
            return
        }
        const res = await updatePreferences(img, false, currentUser.uid)
        console.log(`user ${currentUser.uid} downvoted image ${img.id} - ${JSON.stringify(res)}`)
        img.preferenceStats = res.preferenceStats
    }

    return (
        // TODO disable buttons if user has already voted or is not logged in
        <div className="grid grid-cols-2 gap-1 p-1 ">
            <button className='w-full bg-background-primary uppercase cursor-pointer items-center text-center py-2 hover:underline' onClick={handleUpvote}>
                upvote
            </button>
            <button className='w-full bg-background-primary uppercase cursor-pointer items-center text-center py-2 hover:underline' onClick={handleDownvote}>
                downvote
            </button>
        </div>
    )
}

export default Voting;