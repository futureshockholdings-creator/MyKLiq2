//
//  MyKliqApp.swift
//  MyKliq
//
//  Created by Futureshock Holdings on 9/11/25.
//

import SwiftUI

@main
struct MyKliqApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
