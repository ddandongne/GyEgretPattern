///<reference path="../../../../../typings/main.d.ts"/>

import {HelpScene} from '../scenes/helpScene';

export class HelpSceneMediator extends puremvc.Mediator {

	public static NAME: string = 'HELP_SCENE_MEDIATOR';

	constructor() {
		super(HelpSceneMediator.NAME);
	}

	/** @override */
	public listNotificationInterests(): string[] {
		return [];
	}

	public handleNotification(notification: puremvc.INotification): void {


	}

	public onRegister(): void {
		
	}

	public onRemove(): void {

	}

	public renderScene(width: number, height: number): void {

		var self = this;

		self.viewComponent = new HelpScene(width, height);

		self.viewComponent.onAction = function(action) {
			self.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, action);
		}
	}

	public destroyScene() {
		this.viewComponent = null;
	}

}