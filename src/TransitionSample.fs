module TransitionSample

open Fable.Core.JsInterop
open Fable.Import.React
open Fable.Helpers.React
open Fable.Helpers.React.Props
open Fable.Helpers.React.TransitionGroup

type TransitionSampleState = {
    show: bool
    entered: bool
}

type TransitionSample (props) =
    inherit Component<unit, TransitionSampleState>(props)
    do base.setInitState({ show = false; entered = false })

    override self.render() =
        div [ Class "card" ] [
            div [ Class "card-body" ] [
                h4 [ Class "card-title" ] [
                    str "Transition sample"
                ]
                div [ Class "row flex-middle" ] [
                    div [] [
                        button [
                            OnClick (fun _ ->
                                self.setState(fun state _ ->
                                    { state with show = not state.show }
                                )
                            )
                        ] [ str "Toggle "]
                    ]
                    div [ Class "col-fill col" ] [
                        transitionWithRender [
                            TransitionProps.In self.state.show
                            TransitionProps.Timeout !^1000
                            TransitionProps.UnmountOnExit true
                        ] (ReactNode.Case1 << ReactChild.Case1 << function
                            | Entering -> str "Entering..."
                            | Entered -> str "Entered!"
                            | Exiting -> str "Exiting..."
                            | Exited -> str "Exited!"
                            | Unmounted -> null)
                    ]
                ]
            ]
        ]

let transitionSample () =
    ofType<TransitionSample, _, TransitionSampleState> () []
