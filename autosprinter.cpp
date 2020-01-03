#include <iostream>
#include <stdio.h>
#define WINVER 0x0500
#include <Windows.h>
#include <windows.h>
#include <WinUser.h>

using namespace std;


int main()
{
	cout << "_________________________" << endl;
	cout << "Welcome to AutoSprinter," << endl;
	cout << "a simple script, that enables you to... sprint!" << endl;
	cout << "To activate sprint, press / (numpad slash, a key next to numpad star)" << endl;
	cout << "BY PIOTR SLAWECKI & TOMASZ GAJDA, AGH UNIVERSITY OF SCIENCE AND TECHNOLOGY" << endl;
	cout << "_________________________" << endl;

	bool isOn = false;
	bool executed = false;

	while (true)
	{
		INPUT input1;
		INPUT input2;

		if (GetKeyState(0x6F) < 0)
		{
			if (isOn)
			{
				executed = false;

				input1.ki.dwFlags = KEYEVENTF_KEYUP; // KEYEVENTF_KEYUP for key release
				SendInput(1, &input1, sizeof(INPUT));

				input2.ki.dwFlags = KEYEVENTF_KEYUP; // KEYEVENTF_KEYUP for key release
				SendInput(1, &input2, sizeof(INPUT));
			}

			isOn = !isOn;
		}

		if (isOn)
		{
			input1.type = INPUT_KEYBOARD;
			input1.ki.wScan = 0x2A; // hardware scancode of 'L_Shift'
			input1.ki.time = 0;
			input1.ki.dwExtraInfo = 0;
			input1.ki.wVk = VK_LSHIFT; // virtual-key code of 'L_Shift'
			input1.ki.dwFlags = 0; // 0 for key press
			
			input2.type = INPUT_KEYBOARD;
			input2.ki.wScan = 0x11; // hardware scancode of 'w'
			input2.ki.time = 0;
			input2.ki.dwExtraInfo = 0;
			input2.ki.wVk = 0x57; // virtual-key code of 'w'
			input2.ki.dwFlags = 0; // 0 for key press
			
			if (!executed)
			{
				SendInput(1, &input1, sizeof(INPUT));
				SendInput(1, &input2, sizeof(INPUT));

				executed = true;
			}
			
			Sleep(50);
		}
	}
}

