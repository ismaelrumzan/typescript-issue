import { jsPDF } from "jspdf";

interface GenerationProps {
  doc: jsPDF,
  organization: string,
  firstName: string,
  lastName: string,
  signature?: string
}

export module Generator {
  export function generate({ doc, ...props }: GenerationProps) {
    /* Din A4 dimensions in mm */
    var width = 210
    var height = 297
    var verticalMargin = 30
    var horizontalMargin = 15

    var signatureWidth = 100 / 1.35
    var signatureHeight = 50 / 1.35

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(48);
    doc.text("AV-Vertrag", width / 2, 110, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(22);
    doc.text("Zwischen Digital Hotel", width / 2, 140, { align: "center" });

    doc.setFontSize(14);
    doc.text("-- Auftraggeber --", width / 2, 150, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(22);
    doc.text(`und ${props.organization}`, width / 2, 170, { align: "center" });

    doc.setFontSize(14);
    doc.text("-- Auftragnehmer --", width / 2, 180, { align: "center" });

    doc.setFontSize(12);
    doc.text("über Auftragsverarbeitung i.S.d. Art. 28 Abs. 3 Datenschutz-Grundverordnung (DSGVO)", width / 2, 280, { align: "center" });


    doc.addPage()


    doc.setFont("Helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Präambel", horizontalMargin, verticalMargin);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(14);
    var text = "Diese Anlage konkretisiert die Verpflichtungen der Vertragsparteien zum Datenschutz, die sich aus der im Vertrag vom xxx in ihren Einzelheiten beschriebenen Auftragsverarbeitung ergeben. Sie findet Anwendung auf alle Tätigkeiten, die mit dem Vertrag in Zusammenhang stehen und bei denen Beschäftigte des Auftragnehmers oder durch den Auftragnehmer Beauftragte personenbezogene Daten (»Daten«) des Auftraggebers verarbeiten."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin);
    doc.text(wrapped, horizontalMargin, 40);

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(18);
    var text = "§ 1 Gegenstand, Dauer und Spezifizierung der Auftragsverarbeitung"
    var wrapped = doc.splitTextToSize(text, width - verticalMargin);
    doc.text(wrapped, horizontalMargin, 87);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(14);
    var text = "Aus dem Vertrag ergeben sich Gegenstand und Dauer des Auftrags sowie Art und Zweck der Verarbeitung. Im Einzelnen sind insbesondere die folgenden Daten Bestandteil der Datenverarbeitung (Anmerkung: Bitte ausfüllen , sofern noch nicht im Vertrag geregelt, andernfalls streichen):"
    var wrapped = doc.splitTextToSize(text, width - verticalMargin);
    doc.text(wrapped, horizontalMargin, 105);

    var text = "Die Laufzeit dieser Anlage richtet sich nach der Laufzeit des Vertrages, sofern sich aus den Bestimmungen dieser Anlage nicht darüber hinausgehende Verpflichtungen ergeben."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin);
    doc.text(wrapped, horizontalMargin, 260);


    doc.addPage()


    doc.setFont("Helvetica", "bold");
    doc.setFontSize(18);
    var text = "§ 2 Anwendungsbereich und Verantwortlichkeit"
    var wrapped = doc.splitTextToSize(text, width - verticalMargin);
    doc.text(wrapped, horizontalMargin, verticalMargin);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(14);
    doc.text("(1)", 17, 40);
    var text = "Der Auftragnehmer verarbeitet personenbezogene Daten im Auftrag des Auftraggebers. Dies umfasst Tätigkeiten, die im Vertrag und in der Leistungsbeschreibung konkretisiert sind. Der Auftraggeber ist im Rahmen dieses Vertrages für die Einhaltung der gesetzlichen Bestimmungen der Datenschutzgesetze, insbesondere für die Rechtmäßigkeit der Datenweitergabe an den Auftragnehmer sowie für die Rechtmäßigkeit der Datenverarbeitung allein verantwortlich (»Verantwortlicher« im Sinne des Art. 4 Nr. 7 DS-GVO)."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 40);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(14);
    doc.text("(2)", 17, 92);
    var text = "Die Weisungen werden anfänglich durch den Vertrag festgelegt und können vom Auftraggeber danach in schriftlicher Form oder in einem elektronischen Format (Textform) an die vom Auftragnehmer bezeichnete Stelle durch einzelne Weisungen geändert, ergänzt oder ersetzt werden (Einzelweisung). Weisungen, die im Vertrag nicht vorgesehen sind, werden als Antrag auf Leistungsänderung behandelt. Mündliche Weisungen sind unverzüglich schriftlich oder in Textform zu bestätigen."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 92);


    doc.setFont("Helvetica", "bold");
    doc.setFontSize(18);
    var text = "§ 3 Pflichten des Auftragnehmers"
    var wrapped = doc.splitTextToSize(text, width - verticalMargin);
    doc.text(wrapped, horizontalMargin, 155);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(14);
    doc.text("(1)", 17, 165);
    var text = "Die Weisungen werden anfänglich durch den Vertrag festgelegt und können vom Auftraggeber danach in schriftlicher Form oder in einem elektronischen Format (Textform) an die vom Auftragnehmer bezeichnete Stelle durch einzelne Weisungen geändert, ergänzt oder ersetzt werden (Einzelweisung). Weisungen, die im Vertrag nicht vorgesehen sind, werden als Antrag auf Leistungsänderung behandelt. Mündliche Weisungen sind unverzüglich schriftlich oder in Textform zu bestätigen."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 165);


    doc.addPage()


    doc.text("(2)", 17, verticalMargin);
    var text = "Der Auftragnehmer wird in seinem Verantwortungsbereich die innerbetriebliche Organisation so gestalten, dass sie den besonderen Anforderungen des Datenschutzes gerecht wird. Er wird technische und organisatorische Maßnahmen zum angemessenen Schutz der Daten des Auftraggebers treffen, die den Anforderungen der Datenschutz-Grundverordnung (Art. 32 DS-GVO) genügen. Der Auftragnehmer hat technische und organisatorische Maßnahmen zu treffen, die die Vertraulichkeit, Integrität, Verfügbarkeit und Belastbarkeit der Systeme und Dienste im Zusammenhang mit der Verarbeitung auf Dauer sicherstellen. Dem Auftraggeber sind diese technischen und organisatorischen Maßnahmen bekannt und er trägt die Verantwortung dafür, dass diese für die Risiken der zu verarbeitenden Daten ein angemessenes Schutzniveau bieten."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, verticalMargin);

    var text = `Für die Einhaltung der vereinbarten Schutzmaßnahmen und deren geprüfter Wirksamkeit wird auf die vorliegende Zertifizierung nach Art. 42 DS-GVO verwiesen, deren Einhaltung durch den Auftragnehmer am ${(new Date).toLocaleDateString('de-DE')} geprüft und bestätigt wurde.`
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 109);

    var text = "Eine Änderung der getroffenen Sicherheitsmaßnahmen bleibt dem Auftragnehmer vorbehalten, wobei jedoch sichergestellt sein muss, dass das vertraglich vereinbarte Schutzniveau nicht unterschritten wird."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 137);

    doc.text("(3)", 17, 167);
    var text = "Der Auftragnehmer unterstützt soweit vereinbart den Auftraggeber im Rahmen seiner Möglichkeiten bei der Erfüllung der Anfragen und Ansprüche betroffenen Personen gem. Kapitel III der DS-GVO sowie bei der Einhaltung der in Artt. 33 bis 36 DS-GVO genannten Pflichten. (Anmerkung: Im Vertrag können die Parteien hierzu eine Vergütungsregelung treffen)."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 167);

    doc.text("(4)", 17, 209);
    var text = "Der Auftragnehmer gewährleistet, dass es den mit der Verarbeitung der Daten des Auftraggebers befassten Mitarbeiter und andere für den Auftragnehmer tätigen Personen untersagt ist, die Daten außerhalb der Weisung zu verarbeiten. Ferner gewährleistet der Auftragnehmer, dass sich die zur Verarbeitung der personenbezogenen Daten befugten Personen zur Vertraulichkeit verpflichtet haben oder einer angemessenen gesetzlichen Verschwiegenheitspflicht unterliegen. Die Vertraulichkeits-/ Verschwiegenheitspflicht besteht auch nach Beendigung des Auftrages fort."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 209);

    doc.addPage()



    doc.text("(5)", 17, verticalMargin);
    var text = "Der Auftragnehmer unterrichtet den Auftraggeber unverzüglich, wenn ihm Verletzungen des Schutzes personenbezogener Daten des Auftraggebers bekannt werden. Der Auftragnehmer trifft die erforderlichen Maßnahmen zur Sicherung der Daten und zur Minderung möglicher nachteiliger Folgen der betroffenen Personen und spricht sich hierzu unverzüglich mit dem Auftraggeber ab."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, verticalMargin);

    doc.text("(6)", 17, 72);
    var text = "Der Auftragnehmer nennt dem Auftraggeber den Ansprechpartner für im Rahmen des Vertrages anfallende Datenschutzfragen."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 72);

    doc.text("(7)", 17, 90);
    var text = "Der Auftragnehmer gewährleistet, seinen Pflichten nach Art. 32 Abs. 1 lit. d) DS-GVO nachzukommen, ein Verfahren zur regelmäßigen Überprüfung der Wirksamkeit der technischen und organisatorischen Maßnahmen zur Gewährleistung der Sicherheit der Verarbeitung einzusetzen."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 90);

    doc.text("(8)", 17, 125);
    var text = "Der Auftragnehmer berichtigt oder löscht die vertragsgegenständlichen Daten, wenn der Auftraggeber dies anweist und dies vom Weisungsrahmen umfasst ist. Ist eine datenschutzkonforme Löschung oder eine entsprechende Einschränkung der Datenverarbeitung nicht möglich, übernimmt der Auftragnehmer die datenschutzkonforme Vernichtung von Datenträgern und sonstigen Materialien auf Grund einer Einzelbeauftragung durch den Auftraggeber oder gibt diese Datenträger an den Auftraggeber zurück, sofern nicht im Vertrag bereits vereinbart. (Anmerkung: Im Vertrag können die Parteien hierzu eine Vergütungsregelung treffen.)"
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 125);

    var text = "In besonderen, vom Auftraggeber zu bestimmenden Fällen, erfolgt eine Aufbewahrung bzw. Übergabe, Vergütung und Schutzmaßnahmen hierzu sind gesondert zu vereinbaren, sofern nicht im Vertrag bereits vereinbart. (Anmerkung: Im Vertrag können die Parteien hierzu eine Vergütungsregelung treffen.)"
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 192);

    doc.text("(9)", 17, 229);
    var text = "Daten, Datenträger sowie sämtliche sonstige Materialien sind nach Auftragsende auf Verlangen des Auftraggebers entweder herauszugeben oder zu löschen."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 229);


    doc.addPage()


    doc.text("(10)", 17, verticalMargin);
    var text = "Im Falle einer Inanspruchnahme des Auftraggebers durch eine betroffene Person hinsichtlich etwaiger Ansprüche nach Art. 82 DS-GVO, verpflichtet sich der Auftragnehmer den Auftraggeber bei der Abwehr des Anspruches im Rahmen seiner Möglichkeiten zu unterstützen. (Anmerkung: Im Vertrag können die Parteien hierzu eine Vergütungsregelung treffen.)"
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, verticalMargin);

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(18);
    var text = "§ 4 Pflichten des Auftraggebers"
    var wrapped = doc.splitTextToSize(text, width - verticalMargin);
    doc.text(wrapped, horizontalMargin, 75);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(14);
    doc.text("(1)", 17, 85);
    var text = "Der Auftraggeber hat den Auftragnehmer unverzüglich und vollständig zu informieren, wenn er in den Auftragsergebnissen Fehler oder Unregelmäßigkeiten bzgl. datenschutzrechtlicher Bestimmungen feststellt."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 85);

    doc.text("(2)", 17, 112);
    var text = "Im Falle einer Inanspruchnahme des Auftraggebers durch eine betroffene Person hinsichtlich etwaiger Ansprüche nach Art. 82 DS-GVO, gilt §3 Abs. 10 entsprechend. (Anmerkung: Im Vertrag können die Parteien hierzu eine Vergütungsregelung treffen)."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 112);

    doc.text("(3)", 17, 140);
    var text = "Der Auftraggeber nennt dem Auftragnehmer den Ansprechpartner für im Rahmen des Vertrages anfallende Datenschutzfragen."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 140);

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(18);
    var text = "§ 5 Anfragen betroffener Personen"
    var wrapped = doc.splitTextToSize(text, width - verticalMargin);
    doc.text(wrapped, horizontalMargin, 162);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(14);
    doc.text("(1)", 17, 172);
    var text = "Wendet sich eine betroffene Person mit Forderungen zur Berichtigung Löschung oder Auskunft an den Auftragnehmer, wird der Auftragnehmer die betroffene Person an den Auftraggeber verweisen, sofern eine Zuordnung an den Auftraggeber nach Angaben der betroffenen Person möglich ist. Der Auftragnehmer leitet den Antrag der betroffenen Person unverzüglich an den Auftraggeber weiter. Der Auftragnehmer unterstützt den Auftraggeber im Rahmen seiner Möglichkeiten auf Weisung soweit vereinbart. Der Auftragnehmer haftet nicht, wenn das Ersuchen der betroffenen Person vom Auftraggeber nicht, nicht richtig oder nicht fristgerecht beantwortet wird."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 172);

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(18);
    var text = "§ 6 Nachweismöglichkeiten"
    var wrapped = doc.splitTextToSize(text, width - verticalMargin);
    doc.text(wrapped, horizontalMargin, 247);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(14);
    doc.text("(1)", 17, 257);
    var text = "Der Auftragnehmer weist dem Auftraggeber die Einhaltung der in diesem Vertrag niedergelegten Pflichten mit geeigneten Mitteln nach."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 257);


    doc.addPage()


    doc.text("(2)", 17, verticalMargin);
    var text = "Sollten im Einzelfall Inspektionen durch den Auftraggeber oder einen von diesem beauftragten Prüfer erforderlich sein, werden diese zu den üblichen Geschäftszeiten ohne Störung des Betriebsablaufs nach Anmeldung unter Berücksichtigung einer angemessenen Vorlaufzeit durchgeführt. Der Auftragnehmer darf diese von der vorherigen Anmeldung mit angemessener Vorlaufzeit und von der Unterzeichnung einer Verschwiegenheitserklärung hinsichtlich der Daten anderer Kunden und der eingerichteten technischen und organisatorischen Maßnahmen abhängig machen. Sollte der durch den Auftraggeber beauftragte Prüfer in einem Wettbewerbsverhältnis zu dem Auftragnehmer stehen, hat der Auftragnehmer gegen diesen ein Einspruchsrecht."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, verticalMargin);

    doc.text("(3)", 17, 105);
    var text = "Sollte eine Datenschutzaufsichtsbehörde oder eine sonstige hoheitliche Aufsichtsbehörde des Auftraggebers eine Inspektion vornehmen, gilt grundsätzlich Absatz 2 entsprechend. Eine Unterzeichnung einer Verschwiegenheitsverpflichtung ist nicht erforderlich, wenn diese Aufsichtsbehörde einer berufsrechtlichen oder gesetzlichen Verschwiegenheit unterliegt, bei der ein Verstoß nach dem Strafgesetzbuch strafbewehrt ist."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 105);

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(18);
    var text = "§ 7 Subunternehmer (weitere Auftragsverarbeiter)"
    var wrapped = doc.splitTextToSize(text, width - verticalMargin);
    doc.text(wrapped, horizontalMargin, 160);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(14);
    doc.text("(1)", 17, 170);
    var text = "Der Einsatz von Subunternehmern als weiteren Auftragsverarbeiter ist nur zulässig, wenn der Auftraggeber vorher zugestimmt hat."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 170);

    doc.text("(2)", 17, 186);
    var text = "Ein zustimmungspflichtiges Subunternehmerverhältnis liegt vor, wenn der Auftragnehmer weitere Auftragnehmer mit der ganzen oder einer Teilleistung der im Vertrag vereinbarten Leistung beauftragt. Der Auftragnehmer wird mit diesen Dritten im erforderlichen Umfang Vereinbarungen treffen, um angemessene Datenschutz- und Informationssicherheitsmaßnahmen zu gewährleisten."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 186);


    doc.addPage()


    var text = "Der Auftraggeber stimmt zu, dass der Auftragnehmer Subunternehmer hinzuzieht. Vor Hinzuziehung oder Ersetzung der Subunternehmer informiert der Auftragnehmer den Auftraggeber (ggf. Frist und/oder Regelung für Notfallsituationen). Der Auftraggeber kann der Änderung – innerhalb einer angemessenen Frist – aus wichtigem Grund – gegenüber der vom Auftraggeber bezeichneten Stelle widersprechen. Erfolgt kein Widerspruch innerhalb der Frist gilt die Zustimmung zur Änderung als gegeben. Liegt ein wichtiger datenschutzrechtlicher Grund vor, und sofern eine einvernehmliche Lösungsfindung zwischen den Parteien nicht möglich ist, wird dem Auftraggeber ein Sonderkündigungsrecht eingeräumt (als Option)."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, verticalMargin);

    doc.text("(3)", 17, 106);
    var text = "Erteilt der Auftragnehmer Aufträge an Subunternehmer, so obliegt es dem Auftragnehmer, seine datenschutzrechtlichen Pflichten aus diesem Vertrag dem Subunternehmer zu übertragen."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 106);

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(18);
    var text = "§ 8 Informationspflichten, Schriftformklausel, Rechtswahl"
    var wrapped = doc.splitTextToSize(text, width - verticalMargin);
    doc.text(wrapped, horizontalMargin, 140);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(14);
    doc.text("(1)", 17, 150);
    var text = "Sollten die Daten des Auftraggebers beim Auftragnehmer durch Pfändung oder Beschlagnahme, durch ein Insolvenz- oder Vergleichsverfahren oder durch sonstige Ereignisse oder Maßnahmen Dritter gefährdet werden, so hat der Auftragnehmer den Auftraggeber unverzüglich darüber zu informieren. Der Auftragnehmer wird alle in diesem Zusammenhang Verantwortlichen unverzüglich darüber informieren, dass die Hoheit und das Eigentum an den Daten ausschließlich beim Auftraggeber als »Verantwortlicher « im Sinne der Datenschutz-Grundverordnung liegen."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 150);

    doc.text("(2)", 17, 215);
    var text = "Änderungen und Ergänzungen dieser Anlage und aller ihrer Bestandteile – einschließlich etwaiger Zusicherungen des Auftragnehmers – bedürfen einer schriftlichen Vereinbarung, die auch in einem elektronischen Format (Textform) erfolgen kann, und des ausdrücklichen Hinweises darauf, dass es sich um eine Änderung bzw. Ergänzung dieser Bedingungen handelt. Dies gilt auch für den Verzicht auf dieses Formerfordernis."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 215);


    doc.addPage()


    doc.text("(3)", 17, verticalMargin);
    var text = "Bei etwaigen Widersprüchen gehen Regelungen dieser Anlage zum Datenschutz den Regelungen des Vertrages vor. Sollten einzelne Teile dieser Anlage unwirksam sein, so berührt dies die Wirksamkeit der Anlage im Übrigen nicht."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, verticalMargin);

    doc.text("(4)", 17, 60);
    var text = "Es gilt deutsches Recht."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 60);

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(18);
    var text = "§ 9 Haftung und Schadensersatz"
    var wrapped = doc.splitTextToSize(text, width - verticalMargin);
    doc.text(wrapped, horizontalMargin, 78);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(14);
    doc.text("(1)", 17, 88);
    var text = "Auftraggeber und Auftragnehmer haften gegenüber betroffener Personen entsprechend der in Art. 82 DS-GVO getroffenen Regelung."
    var wrapped = doc.splitTextToSize(text, width - verticalMargin * 2);
    doc.text(wrapped, 30, 88);

    if (props.signature) {
      doc.addImage(props.signature, "JPEG", horizontalMargin, 150, signatureWidth, signatureHeight)
    }

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`${props.firstName} ${props.lastName}`, horizontalMargin + 10, 150 + signatureHeight + 5)
  }
}
