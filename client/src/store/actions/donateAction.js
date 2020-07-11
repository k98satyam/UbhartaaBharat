export const donateAction = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        const { projectID, donerID, amount } = project
        console.log(amount)
        firestore.collection('donate').doc(donerID).set({
            [projectID] : amount
        }, { merge : true }).then(() => {
            dispatch({ type: 'DONATE_SUCCESSFUL' })
        }).catch((err) => {
            dispatch({ type: 'DONATE_UNSUCCESSFUL', err : err })
        })
    }
}

export const updateRecivedAmountProject = (details) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        const projecRecivedAmount = details.projecRecivedAmount
        const projectID = details.id
        //console.log(projecRecivedAmount,projectID)
        firestore.collection('projects').doc(projectID).update({
            recived : projecRecivedAmount
        }).then(() => {
            console.log("success")
        }).catch((err) => {
            console.log(err)
        })
    }
}