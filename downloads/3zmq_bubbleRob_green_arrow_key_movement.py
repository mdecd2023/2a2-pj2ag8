# pip install pyzmq cbor keyboard
from zmqRemoteApi import RemoteAPIClient
import keyboard

client = RemoteAPIClient('192.168.1.57', 23000)

print('Program started')
sim = client.getObject('sim')

# Define the size and position of the cuboidhgjyhjghggjhjgyjhggjhgyghgjygyh
size = [0.1, 0.2, 0.3]
position = [0, 0, 0.15]

# Create the cuboid
cuboid = sim.createPureShape(0, 8, size, 1, None)
sim.setObjectPosition(cuboid, -1, position)

sim.startSimulation()
print('Simulation started')

def setBubbleRobVelocity(leftWheelVelocity, rightWheelVelocity):
    leftMotor = sim.getObject('/leftMotor3')
    rightMotor = sim.getObject('/rightMotor3')
    sim.setJointTargetVelocity(leftMotor, leftWheelVelocity)
    sim.setJointTargetVelocity(rightMotor, rightWheelVelocity)

'''
# Example usage 1:
setBubbleRobVelocity(1.0, 1.0)
time.sleep(2)
setBubbleRobVelocity(0.0, 0.0)
'''
# use keyborad to move BubbleRob

while True:
    if keyboard.is_pressed('y'):
        setBubbleRobVelocity(1.0, 1.0)
    elif keyboard.is_pressed('h'):
        setBubbleRobVelocity(-1.0, -1.0)
    elif keyboard.is_pressed('g'):
        setBubbleRobVelocity(-1.0, 1.0)
    elif keyboard.is_pressed('j'):
        setBubbleRobVelocity(1.0, -1.0)
    elif keyboard.is_pressed('q'):
        # stop simulation
        sim.stopSimulation()
    else:
        setBubbleRobVelocity(0.0, 0.0)




