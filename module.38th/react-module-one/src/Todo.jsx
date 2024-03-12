/* eslint-disable react/prop-types */
// export default function Todo({ task, isDone }) {
//     if(isDone) {
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work On: {task}</li>
// }

// export default function Todo({ task, isDone }) {
//     return <li>{isDone ? 'Finished' : 'Word on'}: {task}</li>
// }

export default function Todo({ task, isDone }) {
    return <li>{task} {isDone && ': Done' || ': Do it'}</li>
}